"use client";

import React from "react";
import { Button, Divider, Input } from "@nextui-org/react";
import { FaArrowRightLong } from "react-icons/fa6";
import usePostMutate from "@/Hooks/shared/usePostMutate";

const Signup = () => {
  const onSuccess = (res) => {
    console.log(res, "from tanstack");
  };
  const onError = (err) => {
    console.log(err, "from tanstack");
  };
  const { mutate, isPending } = usePostMutate("/users/", onSuccess, onError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("form submitted");

    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    const userData = { name, email, password };
    console.log(userData);
    mutate(userData);
    // try {
    //   const response = await axios.post(
    //     "https://theme-store-server.vercel.app/api/v1/users",
    //     userData
    //   );

    //   console.log("Response:", response.data);
    //   // Handle success (optional)
    // } catch (error) {
    //   console.error("Error:", error);
    //   // Handle error (optional)
    // }
  };

  return (
    <div className=" w-full pt-32 css-selector  p-2  ">
      <div className="max-w-[500px] mx-auto  mb-6   p-10 rounded-2xl bg-white">
        <div className="">
          {" "}
          <img src={"/log.png"} className="h-16 " alt="" />
        </div>
        <div className="">
          <h3 className="font-semibold text-2xl mt-2">Sign up </h3>
          <p className="text-sm text-[#616161] font-medium">
            Continue to Shopify account
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-9">
            <h5>Name</h5>
            <Input
              type="text"
              required
              name="name"
              errorMessage="Name is Required"
              // isInvalid={}
              className="border mt-1 mb-3 border-[#1a1a1a] w-full py-2 px-3 rounded-lg"
            />

            <h5>Email</h5>
            <input
              type="text"
              required
              name="email"
              className="border mt-1 mb-3 border-[#1a1a1a] w-full py-2 px-3 rounded-lg"
            />
            <h5>Password</h5>
            <input
              type="Password"
              required
              name="password"
              className="border mt-1 mb-3 border-[#1a1a1a] w-full py-2 px-3 rounded-lg"
            />

            <Button
              className="className='w-full  h-11 mt-3 hover:bg-[#ebebeb]  font-medium  rounded-lg flex justify-center items-center gap-3 "
              type="submit"
              color="primary"
              isLoading={isPending}
            >
              Button
            </Button>
            {/* <button className='w-full  h-11 mt-3 hover:bg-[#ebebeb]  font-medium  rounded-lg flex justify-center items-center gap-3 '><LiaUserLockSolid className='text-2xl ' /> <span className='text-sm'>sign in with passkye</span></button> */}
          </div>
        </form>
        {/* horizental line */}

        <div className="flex h-5 items-center space-x-2 text-small mt-12">
          <Divider orientation="horizontal" className="w-[43%]" />
          <div>or</div>
          <Divider orientation="horizontal" className="w-[43%]" />
        </div>

        {/* socal button */}
        <div className=" mt-6 grid grid-cols-3 gap-3 h-12">
          <div className=" bg-[#ebebeb] rounded-lg flex  justify-center items-center">
            {" "}
            <div className="  ">
              {" "}
              <img src={"/applelogo.svg"} className="h-6 hover:h-5 " alt="" />
            </div>
          </div>
          <div className=" bg-[#ebebeb] rounded-lg flex  justify-center items-center">
            {" "}
            <div className="   ">
              {" "}
              <img
                src={"/facebooklogo (1).svg"}
                className="h-6 hover:h-5  "
                alt=""
              />
            </div>
          </div>
          <div className=" bg-[#ebebeb] rounded-lg flex  justify-center items-center">
            {" "}
            <div className="  ">
              {" "}
              <img
                src={"/googlelogo.svg"}
                className=" h-6  hover:h-5 "
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="">
          <p className="text-sm text-[#616161] font-medium mt-12 flex items-center transition duration-1000">
            New to Shopify?
            <span className="text-blue-500 hover:text-blue-400 hover:mr-3 mr-1 transition duration-1000 ml-2">
              Get Started
            </span>
            <FaArrowRightLong className="text-blue-500 transition duration-1000" />
          </p>
          <div className=" flex gap-2">
            <p className="text-sm text-[#616161]  mt-12 hover:underline">
              Help
            </p>
            <p className="text-sm text-[#616161]  mt-12 hover:underline">
              Privacy
            </p>

            <p className="text-sm text-[#616161]  mt-12 hover:underline">
              Terms
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
