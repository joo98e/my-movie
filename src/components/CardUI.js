import React, { Component } from 'react';

import {
    withStyles,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Link
} from '@material-ui/core';

const styles = theme => ({
    cardStyle: {
        maxWidth: 300,
        padding : theme.spacing(2),
        color: "#FFF",
        backgroundColor: "#8C8C8C"
    }
});

class CardUI extends Component {
    render() {

        const { classes, id, title, url, poster } = this.props;
        
        return (
            <Card className={classes.cardStyle}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="poster"
                        image={poster}
                        title={poster}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {id}
                        </Typography>
                        <Typography gutterBottom color="textPrimary" component="p">
                            {title}
                        </Typography>
                        <Link>{url}</Link>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}


export default withStyles(styles)(CardUI);