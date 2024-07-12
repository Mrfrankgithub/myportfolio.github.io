const express = require("express");

const app = express();
const port = 4000;


//you can only communicate with a server using routes
//each route must define a http protocol: GET, POST, PUT, PATCH, DELETE

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get('/', function (req, res) {
    res.render("index");
});


app.get('/about', function (req, res) {
    res.render("about");
});



// app.get('/form', function (req, res) {
//     res.render("form");
// });


// app.post("/validate", (req, res) => {

//     const schema = Joi.object({
//         fullname: Joi.string().required(),
//         email: Joi.string().email().required(),
//         message: Joi.string().required()
//     });

//     const validate = schema.validate(req.body);
//     if (validate.error) {
//         res.send(validate.error.message);
//     } else {
//         res.send("validation passed")
//     }
// });




// app.post('/submit', async function (req, res) {

//     try {
//         await prisma.contacts.create({
//             data: {
//                 fullname: req.body.name,
//                 email: req.body.email,
//                 message: req.body.message
//             }
//         });

//         res.status(200).json({
//             serverResponse: "Message received"
//         });
//     } catch (error) {

//         console.error(error)
//         res.status(500).json({
//             error: error
//         })
//     }
// });

app.listen(port, () => {
    console.log("Listening on port " + port);
});


// app.listen(port, function(){
//     console.log("Listening on port " + port);
// });
