module.exports = (req, res) => {
    const chunks = []

    req
        .on('data', Array.prototype.push.bind(chunks, chunk))
        .on('end', () => {
            const [x, y] =
                Buffer
                    .concat(chunks)
                    .toString('utf8')
                    .split('&')
                    .map(x =>
                        Number(x.split('=')[1]))

            res.send(`<h1>Result</h1>${x} * ${y} = ${x * y}`)
        })
}
