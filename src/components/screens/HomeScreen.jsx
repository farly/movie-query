import React from 'react';

import {
	Button,
	Grid,
	Paper,
	Snackbar,
	TextField
} from '@material-ui/core'

import {
	makeStyles
} from '@material-ui/core/styles';

import MuiAlert from '@material-ui/lab/Alert'

const useStyles = makeStyles((theme) => ({
	root: {
		width: '500px',
		margin: 'auto'
	},
	inputs: {
		width: '80%'
	}
}))

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />
}

export const HomeScreen = ({formState, updateFormState, onSearch, onError, closeError}) => {
	const classes = useStyles();

	const {error, errorMessage} = onError;

  return (
		<Paper className={classes.root}>
			<div>
				<form onSubmit={onSearch}>
					<Grid container spacing={3} justify="center">
						<Grid item className={classes.inputs}> 
							<TextField 
								label="URL"
								variant="outlined"
								fullWidth
								value={formState.url}
								onChange={ (e) => updateFormState({...formState, url: e.target.value})}
								required
							/>		
						</Grid>
						<Grid item className={classes.inputs}> 
							<TextField 
								label="Authorisation Token"
								variant="outlined"
								fullWidth
								value={formState.apikey}
								onChange={ (e) => updateFormState({...formState, apikey: e.target.value})}
								required
							/>		
						</Grid>
						<Grid item className={classes.inputs}> 
							<TextField 
								label="Headers"
								variant="outlined"
								fullWidth
								value={formState.headers}
								onChange={ (e) => updateFormState({...formState, headers: e.target.value})}
								required
							/>		
						</Grid>
						<Grid item className={classes.inputs}> 
							<TextField 
								label="Body"
								variant="outlined"
								fullWidth
								value={formState.body}
								onChange={ (e) => updateFormState({...formState, body: e.target.value})}
							/>		
						</Grid>
						<Grid item className={classes.inputs}> 
							<TextField 
								label="Http Method"
								variant="outlined"
								fullWidth
								value={formState.httpMethod}
								onChange={ (e) => updateFormState({...formState, httpMethod: e.target.value})}
							/>		
						</Grid>
						<Grid item className={classes.inputs}>
							<Button type="submit" color="primary">Search</Button>
						</Grid>
					</Grid>
				</form>

			</div>
			{ error &&
				<Snackbar 
					anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
					open={error}
					onClose={() => closeError()}
					autoHideDuration={3000}
				>
					<Alert severity="error" onClose={() => closeError()}>{errorMessage}</Alert>
				</Snackbar>
			}
		</Paper>
  )
}
