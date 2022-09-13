import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ setSearch }: any) => {
  return (
    <>
      <Box
        sx={{
          "& > :not(style)": { m: 1 },
        }}
      >
        <TextField
          onChange={(e) => setSearch(e.target.value)}
          id="outlined-basic"
          label="Fatura Ara"
          helperText="Fatura No, Gönderici Adı, Alıcı Adı, alanlarında arama yapabilirsiniz."
          color="secondary"
          variant="outlined"
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};

export default Searchbar;
