// Finds the validation errors in this request and wraps them in an object with handy functions
const { param, validationResult } = require('express-validator');
const validatorMiddleware =   (req,res,nxt) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
// return res.status(400).json({ errors: errors.array() });
const alert = errors.array() 
res.render('/register', {
    alert
})
}
nxt();
};

module.exports = validatorMiddleware;