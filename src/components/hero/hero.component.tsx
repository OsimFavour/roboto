import { ChangeEvent, useState } from "react";
import Search from "../search/search.component";


const Hero = () => {

  const [searchField, setSearchField] = useState('')

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase()
    // console.log(searchFieldString)
    setSearchField(searchFieldString)
  }

  return (
    <div className="max-w-2xl pt-20 pb-24 mx-auto">
      <h1 className="text-50 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
        Search for your favorite robot in 3 seconds
      </h1>
      <h2 className="sm:text-xl font-4 font-medium lh-6 ld-04 pb-11 text-gray-700 text-center">
        Roboto is the fastest search engine for robots worldwide
        <br />
        and here's how I use it step-by-step
      </h2>


    <Search 
      placeholder="Search Robot Here..."
      onChangeHandler={onSearchChange}
    />

      
    </div>
  );
};

export default Hero;
