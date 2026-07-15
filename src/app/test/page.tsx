"use client";

export default function Test() {
     return (
          <div className="p-10">
               <button
                    onClick={() => alert("Button works")}
                    className="bg-blue-500 text-white px-4 py-2"
               >
                    Click Me
               </button>
          </div>
     );
}
