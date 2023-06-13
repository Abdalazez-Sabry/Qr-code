import QrCard from "./compnonets/QrCard"
import { Box } from "@mui/material"

function App() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>
            <QrCard></QrCard>
        </Box>
    )
}

export default App;
