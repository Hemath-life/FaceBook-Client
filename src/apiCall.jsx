import axios from "axios"

export default async function loginCall(userCredentials, dispatch) {
	dispatch({ type: "LOGIN_START" })
	try {
		console.log(userCredentials)
		const res = await axios.post(`http://localhost:8800/api/auth/login`, userCredentials)
		dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
	} catch (error) {
		dispatch({ type: "LOGIN_FAILURE", payload: error })
	}
}
