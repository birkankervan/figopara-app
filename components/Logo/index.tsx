import Box from "@mui/material/Box";
import Image from "next/image";

const Logo = () => {
  return (
    <Box my={3}>
      <Image
        src="https://figopara.com/wp-content/uploads/2020/06/logo-300x69.png.webp"
        alt="Figopara Logo"
        width={160}
        height={36}
      />
    </Box>
  );
};

export default Logo;
