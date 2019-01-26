// import React from 'react';
// import { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import PropTypes from 'prop-types';



// class User extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             // id: '',
//             userName: 'guest',
//             password: 'guest'
//         };
//     }

//     render() {
//         return(
//             <Form inline>
//                 <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                     <Label for="exampleEmail" className="mr-sm-2">Email</Label>
//                     <Input type="email" name="email" id="exampleEmail" placeholder="something@idk.cool" />
//                 </FormGroup>
//                 <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//                     <Label for="examplePassword" className="mr-sm-2">Password</Label>
//                     <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
//                 </FormGroup>
//                 <Button>Submit</Button>
//             </Form>
//         );
//     }
// }


// Input.propTypes = {
//     children: PropTypes.node,
//     // type can be things like text, password, (typical input types) as well as select and textarea, providing children as you normally would to those.
//     type: PropTypes.string,
//     size: PropTypes.string,
//     bsSize: PropTypes.string,
//     // state: deprecated(PropTypes.string, 'Please use the prop "valid"'),
//     valid: PropTypes.bool, // applied the is-valid class when true, does nothing when false
//     invalid: PropTypes.bool, // applied the is-invalid class when true, does nothing when false
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     // ref will only get you a reference to the Input component, use innerRef to get a reference to the DOM input (for things like focus management).
//     innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
//     // static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
//     plaintext: PropTypes.bool,
//     addon: PropTypes.bool,
//     className: PropTypes.string,
//     cssModule: PropTypes.object,
// };

// Form.propTypes = {
//     children: PropTypes.node,
//     inline: PropTypes.bool,
//     // Pass in a Component to override default element
//     tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]), // default: 'form'
//     innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.string]),
//     className: PropTypes.string,
//     cssModule: PropTypes.object,
// };

// FormGroup.propTypes = {
//     children: PropTypes.node,
//     // Applied the row class when true, does nothing when false
//     row: PropTypes.bool,
//     // Applied the form-check class when true, form-group when false
//     check: PropTypes.bool,
//     inline: PropTypes.bool,
//     // Applied the disabled class when the check and disabled props are true, does nothing when false
//     disabled: PropTypes.bool,
//     // Pass in a Component to override default element
//     tag: PropTypes.string, // default: 'div'
//     className: PropTypes.string,
//     cssModule: PropTypes.object,
// };

// export default User