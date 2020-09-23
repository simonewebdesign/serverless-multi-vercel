module.exports = (req, res) => {
    const {
        query: { name },
      } = req

    const {x, y} = req.body

    res.send(`<h1>${name} Result</h1>${x} * ${y} = ${Number(x) * Number(y)}`)
}
