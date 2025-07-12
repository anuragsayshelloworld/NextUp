import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import useLocalstorage from "../hooks/useLocalstorage";

export default function BucketList() {
  const [wish, setWish] = useState("");
  const { user } = useContext(AuthContext);

  const storedWishes = useLocalstorage("wishlist");
  const completedWishes = useLocalstorage("wishcompleted");

  const [wishList, setWishList] = useState(storedWishes);
  const [completedList, setCompletedList] = useState(completedWishes);

  useEffect(() => {
    setWishList(storedWishes);
  }, [storedWishes]);

  useEffect(() => {
    setCompletedList(completedWishes);
  }, [completedWishes]);

  function handleAdd() {
    if (!wish.trim()) return;
    const newWish = { wishName: wish, user };
    const updatedList = [...wishList, newWish];
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    setWishList(updatedList);
    setWish("");
  }

  function handleDelete(index) {
    const updatedList = [...wishList];
    updatedList.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(updatedList));
    setWishList(updatedList);
  }

  function handleComplete(index) {
    const wishToComplete = wishList[index];
    const updatedWishList = [...wishList];
    updatedWishList.splice(index, 1);

    const updatedCompleted = [...completedList, wishToComplete];

    localStorage.setItem("wishlist", JSON.stringify(updatedWishList));
    localStorage.setItem("wishcompleted", JSON.stringify(updatedCompleted));

    setWishList(updatedWishList);
    setCompletedList(updatedCompleted);
  }

  return (
    <div className="flex gap-16 w-full max-w-4xl mx-auto p-4">
    
      <div className="flex flex-col gap-4 w-1/2 py-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            placeholder="The dream"
            className="border p-2 w-full"
          />
          <button onClick={handleAdd} className="bg-gray-800 text-white px-4">
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {Array.isArray(wishList) &&
            wishList.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2"
              >
                <span>{item.wishName}</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleComplete(index)}
                    className="text-green-900 border shadow-sm p-2"
                  >
                    ✓ Done
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-900 border p-2 shadow-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 w-1/2 py-4">
        <h2 className="text-xl font-semibold">Completed</h2>
        <ul className="space-y-2">
          {Array.isArray(completedList) &&
            completedList.map((item, index) => (
              <li key={index} className="border p-2 text-gray-600">
                {item.wishName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
