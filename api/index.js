module.exports = (req, res) => {
    const [x, y] =
        req
            .body
            .split('&')
            .map(x =>
                Number(x.split('=')[1]))

    res.send(`<h1>Result</h1>${x} * ${y} = ${x * y}`)
}
