/* eslint-disable no-unused-vars */
import Feature1 from "./Feature1"
import Feature2 from "./Feature2";
import Feature3 from "./Feature3";

const Feature = () => {

  return (
    <div>
      <div id='inside-div' className=" p-5">
        <form className="space-y-4 bg-white text-black">
          <Feature1 />
          <hr />
          <Feature2 />
          <hr />
          <Feature3 />
        </form>
      </div>
    </div>
  )
}

export default Feature;
