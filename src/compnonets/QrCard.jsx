import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material"

const QrCard = () => {
    return (
        <Card 
            sx={{
                maxWidth:"30vw", 
                minWidth: "400px",
                transition: "all 0.2s ease",
                "&:hover": {
                    maxWidth: "35vw",
                    minWidth: "450px",
                    boxShadow: "0px 0px 20px  rgba(0, 0, 0, 0.5)"
                }
            }}
        >
            <CardActionArea>
                <CardMedia 
                    component="img"
                    src={require("../images/image-qr-code.png")}
                    alt="hello ?"
                    height="auto"
                />
                <CardContent sx={{width: "70%", margin: "auto"}}>
                    <Typography variant="h5" sx={{fontWeight: "bold", marginBottom: "30px"}}>Improve your front-end skills by building projects</Typography>
                    <Typography sx={{marginBottom: "20px"}}>Scan the Qr code to visit Frontend Mentor and take your coding skills to the next level</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default QrCard;