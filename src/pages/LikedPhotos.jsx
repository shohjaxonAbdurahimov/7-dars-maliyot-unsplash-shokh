import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/likeSlice";
import { FaDownload, FaHeart, FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
function LikedPhotos() {
  const dispatch = useDispatch();
  const { value: data } = useSelector((state) => state.like);
  return (
    <>
      {data.length ? (
        <div className="grid gap-y-8 pt-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div>
                  <img
                    onClick={() => document.getElementById(item.id).showModal()}
                    srcSet={item.urls.regular}
                    alt={item.slug}
                    className=" w-[300px] rounded-t-xl h-[300px] object-cover mx-auto"
                  />
                  <button
                    className="text-xl mx-auto border-e mt-2 btn btn-primary flex gap-2 items-center"
                    onClick={() => {
                      dispatch(remove(item));
                    }}
                  >
                    Remove <FaHeart color="black" />
                  </button>
                </div>
                <dialog id={item.id} className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost text-2xl absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg mb-3">More the image</h3>
                    <p className="font-semibold mb-3">{item.alt_description}</p>
                    <p className="flex items-center gap-1 font-bold mb-3">
                      <FaHeart /> {item.likes}
                    </p>
               <img src={item.urls.regular} alt="" />
               
               
                    <Link
                      to={item.links.download}
                      className="flex items-center gap-2 font-semibold"
                    >
                      <FaDownload />
                      Download the photo
                    </Link>
                  </div>
                </dialog>
              </div>
            );
          })}{" "}
        </div>
      ) : (
        <h1 className="text-3xl text-center py-5 font-bold">
          You don't have any liked photos :(
        </h1>
      )}
    </>
  );
}

export default LikedPhotos;
