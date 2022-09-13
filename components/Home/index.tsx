import Typography from "@mui/material/Typography";

const Homepage = () => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Figopara Front-End Case Study
      </Typography>
      <Typography variant="subtitle1" component="p">
        Case link:{" "}
        <a href="/figopara-case.docx" target="_blank">
          Tıklayınız
        </a>
      </Typography>
      <Typography variant="subtitle1" component="p">
        Case&apos;de istenen tüm özellikler yapılmıştır. Ayrıca bazı ekstra
        özellikler de eklenmiştir. Tamamıyla responsive bir tasarım yapılmıştır.
      </Typography>
      <Typography variant="h5" component="h2">
        Kullanılan Kütüphaneler:
      </Typography>
      <Typography variant="h6" component="h3">
        Typescript
      </Typography>
      <Typography variant="h6" component="h3">
        ReactJS
      </Typography>
      <Typography variant="h6" component="h3">
        NextJS
      </Typography>
      <Typography variant="h6" component="h3">
        Redux Toolkit
      </Typography>
      <Typography variant="h6" component="h3">
        Emotion
      </Typography>
      <Typography variant="h6" component="h3">
        Material UI
      </Typography>
      <Typography variant="h6" component="h3">
        Axios, SWR, js-cookie, date-fns
      </Typography>
    </>
  );
};

export default Homepage;
