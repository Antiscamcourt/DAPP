import React from "react";
import {CardActionArea,CardContent,CardActions,Button,CardMedia,Typography,Card,Grid,} from "@material-ui/core";
import {useStyles} from './useStyle'


export const DappCards = () => {
  const styles = useStyles();

  
  
  return (
    <>
      <Grid xs={12} sm={5} md={3} item>
        <Card className={styles.card}>
          <CardActionArea>
            <CardMedia
              className={styles.img}
              component="img"
              alt="NIKE SHOES"
              height="200"
            //   image={imgUrl}
              title="NIKE SHOES STORE"
            />
            <CardContent>
              <Typography noWrap gutterBottom variant="h5" component="h2">
                {/* {name} */}
              </Typography>
              <Typography
                align="justify"
                variant="body2"
                color="textSecondary"
                component="p"
              >
             {/* {description} */}
              </Typography>
            </CardContent>
            <CardContent className={styles.root}>
              <Typography variant={"h6"} align="center">
                PRICE
              </Typography>
              {/* <Typography align="center">Rs.{price} </Typography> */}
            </CardContent>
          </CardActionArea>
          <CardActions>
            <div className={styles.action}>
              <Button
                // onClick={addToCart}
                className={styles.btn}
                size="small"
                color="primary"
              >
                {/* {btnText} */}
              </Button>
            </div>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}
