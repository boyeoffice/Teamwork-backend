exports.login = (req,res) => {
	const {email, password} = req.body;
	res.status(200).send({data: email});
}