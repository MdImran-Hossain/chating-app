import React, { useState } from "react";
import { inputFied } from "../componet/InputField";
inputFied;
const SingUp = () => {
  const [inputFild,setinputfild]=useState(
    {
      email:"",
      fullName:"",
      password:"",
    }
  )
  const [inputFildErr,setinputfildErr]=useState(
    {
      emailErr:"",
      fullNameErr:"",
      passwordErr:"",
    }
  )
  const handleINputChange=(event)=>{
    const {name, value}=event.target;
   setinputfild(
    {
      ...inputFied,
      [name]:value
    }
   )
  }
  const submitbton=()=>{
    const {email, fullName, password}=inputFild
   if(!email){
    setinputfildErr({...inputFildErr, emailErr:"your email is mising"})
   }else if(!fullName){
    setinputfildErr({...inputFildErr, fullNameErr:"your Full Name is mising"})
   }else if(!password){
    setinputfildErr({...inputFildErr, fullNameErr:"your Full Name is mising"})
   }
  }
  return (
    <>
      <section>
        <div className="container m-auto">
          <div className="w-full h-screen flex justify-center items-center">
            <div className=" w-[55%] p-5 border-2 border-cyan-50 flex justify-center rounded-2xl box relative flex-col gap-3 shadow-2xl ">
              <div className="text-center">
                <h2 className="text-[34px] font-bold font-nunito text-fontColor">
                  Get started with easily register
                </h2>
                <p className="text-[20px] font-normal font-nunito text-fontColor opacity-50">
                  Free register and you can enjoy it
                </p>
              </div>
              <div className="text-center">
                <form>
                  {inputFied.map((inputFied) => {
                    return (
                      <div key={inputFied.id} className=" relative p-[20px]">
                        <input
                          type={
                            inputFied.name.toLocaleLowerCase() ==
                            "email".toLocaleLowerCase()
                              ? "email"
                              : inputFied.name == "fullName"
                              ? "text"
                              : "password"
                          }
                          id={inputFied.id}
                          name={inputFied.name}
                          className="w-[450px] p-6 border-2 border-amber-500 rounded-2xl inputF"
                          placeholder={inputFied.place} onChange={handleINputChange}
                          required
                        />

                        <label
                          htmlFor={inputFied.name}
                          className=" absolute top-[50%] translate-y-[-50%]  left-[125px]  inputL"
                        >
                          {inputFied.place}
                        </label>
                        {inputFildErr.emailErr ? <span className="text-red-300 block text-start pl-[100px] ">{inputFildErr.emailErr}</span>:inputFildErr.fullNameErr ? <span className="text-red-300 block text-start pl-[100px] ">{inputFildErr.fullNameErr}</span>:inputFildErr.passwordErr && <span className="text-red-300 block text-start pl-[100px] ">{inputFildErr.passwordErr}</span>}
                      </div>
                    );
                  })}
                  <button onClick={submitbton} className="w-[450px] border-2 border-bandColor bg-bandColor rounded-4xl p-5 ml-5 text-2xl font-normal font-nunito text-white my-5">
                    Sign up
                  </button>
                  <p className="text-center text-[13px] font-normal font-poppins text-fontColor">
                    Already have an account ?{" "}
                    <span className="text-[#EA6C00] font-bold">Sign In</span>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingUp;
