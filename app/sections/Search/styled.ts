import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const SearchInput = styled(TextField)(({ theme }) => ({
  color: "inherit",
  boxSizing: "border-box",
  width: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "0.75rem 1rem",
    backgroundSize: "1.5rem",
    position: "relative",
  },
}));

export { SearchInput };
