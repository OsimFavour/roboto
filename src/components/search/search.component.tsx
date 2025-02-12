import { ChangeEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

type SearchProps = {
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const Search = ({placeholder, onChangeHandler}: SearchProps) => {
  return (
    <div className="flex justify-center text-white">
      <div className="w-full max-w-xl p-4 space-y-4">
        <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-3">
          <Input
            className="w-full bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 text-lg py-6"
            type="text"
            placeholder={placeholder}
            onChange={onChangeHandler}
          />
          <Button
            className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white text-lg py-6 px-8"
            type="submit"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Search;
