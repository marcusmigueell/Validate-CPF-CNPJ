import { app } from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`\u{1F525} Server is running on PORT ${PORT}`));