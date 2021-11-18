import React from "react";
import { CardMedia, 
  Typography, 
  CardHeader, 
  CardContent, 
  Card,
  CardActions,
  Button} from "@material-ui/core";
import { Link } from "react-router-dom";



export default function InnovationCard({ innovation }) {
  return (
    <Card>
      <CardHeader
        title={innovation.innovation_title}
        subheader={innovation.innovation_status}
      />
      <CardMedia component="img" height="194" image={`data:image/jpeg;base64,${Buffer.from(innovation.innovation_pictures?.data).toString(
            `base64`
          )}`}
      />
      <CardContent>
        <Typography>{innovation.innovation_description}</Typography>

        <Typography>
          Innovator: <strong>innovator #{innovation.innovator_id}</strong>
        </Typography>
      </CardContent>
      <CardActions>
        <Link
        to={{
          pathname: "/innovationSpecific",
          state: {innovation : innovation}
          
        }}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          href= "/innovationSpecific"  
> 
          View Item
        </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
