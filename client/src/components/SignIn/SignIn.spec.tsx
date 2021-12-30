// import {mount, ReactWrapper} from 'enzyme';
// import React from 'react';
// // import {act} from 'react-dom/test-utils';
// import {AuthProvider} from '../../context/AuthContext';
// // import {getPopular} from '../../api/api';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {ThemeProvider} from 'styled-components';
// import {theme} from '../../themes';
// import {SignIn} from './SignIn';
// // import {testPopular} from '../../../config/helpers/movies';

// jest.mock('../../api/api');

// // const getPopular = jest.fn().mockResolvedValue(testPopular);

// // jest.spyOn(URLSearchParams.prototype, 'get').mockReturnValue('sign-in');

// const props = {
//   onClick: jest.fn(),
// };

// const setup = () =>
//   mount(
//     <ThemeProvider theme={theme}>
//       <AuthProvider>
//         <Router>
//           <SignIn {...props} />
//         </Router>
//       </AuthProvider>
//     </ThemeProvider>
//   );

// describe('SignIn', () => {
//   let wrapper: ReactWrapper;

//   const findByTestAttr = (value: string) =>
//     wrapper.find(`[data-test="${value}"]`);

//   beforeEach(() => {
//     wrapper = setup();
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('Should render the component', () => {
//     expect(wrapper.exists()).toBeTruthy();
//   });

//   it('should render modal', () => {
//     console.log(findByTestAttr('signin-modal').debug());
//   });

//   // it('should call getPopular without crashing', () => {
//   //   console.log(wrapper.debug());
//   //   expect(getPopular).toHaveBeenCalled();
//   // });
// });
