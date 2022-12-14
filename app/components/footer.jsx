import {Container, Typography} from "@mui/material";

export default function Footer() {

    return (
        <Container
            maxWidth="false"
            sx={{
                position: "fixed",
                left: "0",
                bottom: "0",
                textAlign: "center"
            }}>
            <Typography variant="overline" sx={{color: "text.secondary"}}>2022 &copy; Ensicaen : BOILLON Nicolas - DEBEAUPTE Arthur - LEBOCQ Titouan</Typography>
        </Container>
    )
}