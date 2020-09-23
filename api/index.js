module.exports = (req, res) => {
    const {x, y} = req.body

    res.send(`<h1>Result</h1>${x} * ${y} = ${Number(x) * Number(y)}`)
}
