import {makeStyles, Paper, Container, Grid} from "@material-ui/core";
import React from "react";

function GridIntro() {
	let useStyles = makeStyles({
		size: {
			height: "20vh",
			backgroundColor: "lightgray",
		},
		color: {
			colors: "lightgreen",
		},
	});
	let classes = useStyles();

	//wd->12 part uske acc. sare size define hote h
	return (
		<div>
			<Container>
				<Grid container spacing={5}>
					<Grid item xs={5} sm={3} md={5} lg={10}>
						<Paper
							className={classes.size}
							className={classes.color}>
							{" "}
							Hello
						</Paper>
					</Grid>
					<Grid item xs={5} sm={3} md={5} lg={2}>
						<Paper className={classes.size}> Hello</Paper>
					</Grid>
					<Grid item xs={5} sm={6} md={2}>
						<Paper className={classes.size}> Hello</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default GridIntro;
