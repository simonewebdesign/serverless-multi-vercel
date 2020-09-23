module.exports = (req, res) => {
    const { one, two } = req.query
    res.send(`<h1>Result</h1>${one} * ${two} = ${one * two}`)
}