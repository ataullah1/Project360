import React from "react";

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto pt-20  px-2 ">
      <h3 className=" text-2xl font-bold text-center mb-9   "> My Order</h3>

      <div className="">
        {/* order list  */}
        <div className="flex w-full items-center space-x-2 sm:space-x-4 mt-4 border-b-2 pb-4 border-dashed ">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
            alt="Replica headphones"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  Replica headphones
                </h3>
                <p className="text-lg font-semibold">99.95€</p>
              </div>

              {/* dawnlod button */}
              <div className="">
                <button class="download-button transform active:scale-95 bg-primaryColor hover:bg-orange-800 text-white px-6  py-5 rounded-lg font-bold tracking-widest w-full">
                  <div class="flex justify-center items-center relative">
                    <div class="svg-container">
                      <svg
                        class="download-icon"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="download-arrow"
                          d="M13 9L9 13M9 13L5 9M9 13V1"
                          stroke="#F2F2F2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                          stroke="#F2F2F2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="download-loader text-white hidden"></div>

                      <svg
                        class="check-svg hidden"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="button-copy pl-2 leading-none uppercase hidden lg:block md:block ">
                      DOWNLOAD
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>


          {/* order list  */}
          <div className="flex w-full items-center space-x-2 sm:space-x-4 mt-4 border-b-2 pb-4 border-dashed ">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
            alt="Replica headphones"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  Replica headphones
                </h3>
                <p className="text-lg font-semibold">99.95€</p>
              </div>

              {/* dawnlod button */}
              <div className="">
                <button class="download-button transform active:scale-95 bg-primaryColor hover:bg-orange-800 text-white px-6  py-5 rounded-lg font-bold tracking-widest w-full">
                  <div class="flex justify-center items-center relative">
                    <div class="svg-container">
                      <svg
                        class="download-icon"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="download-arrow"
                          d="M13 9L9 13M9 13L5 9M9 13V1"
                          stroke="#F2F2F2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                          stroke="#F2F2F2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="download-loader text-white hidden"></div>

                      <svg
                        class="check-svg hidden"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="button-copy pl-2 leading-none uppercase hidden lg:block md:block ">
                      DOWNLOAD
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>



          {/* order list  */}
          <div className="flex w-full items-center space-x-2 sm:space-x-4 mt-4 border-b-2 pb-4 border-dashed ">
          <img
            className="flex-shrink-0 object-cover w-20 h-20 dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
            src="https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=675&amp;q=80"
            alt="Replica headphones"
          />
          <div className="flex flex-col justify-between w-full pb-4">
            <div className="flex justify-between w-full pb-2 space-x-2">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                  Replica headphones
                </h3>
                <p className="text-lg font-semibold">99.95€</p>
              </div>

              {/* dawnlod button */}
              <div className="">
                <button class="download-button transform active:scale-95 bg-primaryColor hover:bg-orange-800 text-white px-6  py-5 rounded-lg font-bold tracking-widest w-full">
                  <div class="flex justify-center items-center relative">
                    <div class="svg-container">
                      <svg
                        class="download-icon"
                        width="18"
                        height="22"
                        viewBox="0 0 18 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          class="download-arrow"
                          d="M13 9L9 13M9 13L5 9M9 13V1"
                          stroke="#F2F2F2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17"
                          stroke="#F2F2F2"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="download-loader text-white hidden"></div>

                      <svg
                        class="check-svg hidden"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM15.1071 7.9071C15.4976 7.51658 15.4976 6.88341 15.1071 6.49289C14.7165 6.10237 14.0834 6.10237 13.6929 6.49289L8.68568 11.5001L7.10707 9.92146C6.71655 9.53094 6.08338 9.53094 5.69286 9.92146C5.30233 10.312 5.30233 10.9452 5.69286 11.3357L7.97857 13.6214C8.3691 14.0119 9.00226 14.0119 9.39279 13.6214L15.1071 7.9071Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div class="button-copy pl-2 leading-none uppercase hidden lg:block md:block ">
                      DOWNLOAD
                    </div>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
