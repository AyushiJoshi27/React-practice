import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Divider } from '@chakra-ui/react'
import NavBar from './components/navbar/navbar';
import LayoutComponent from './components/layout/layout';
import BoxLayout from './components/layout/box';
import ContainerComponent from './components/layout/container';
import FlexComponent from './components/layout/flex';
import SimpleGridComponent from './components/layout/simplegrid';
import StackComponent from './components/layout/stack';
import WrapComponent from './components/layout/wrap';
import DisplayCompoLayout from './components/display/displayCompoLayout';
import CardCompo from './components/display/card';
import ListCompo from './components/display/list';
import StatCompo from './components/display/stat';
import TableCompo from './components/display/table';
import TagCompo from './components/display/tag';
import OverlayLayout from './components/overlays/overlayLayout';
import ModalCompo from './components/overlays/modal';
import MenuCompo from './components/overlays/menu';
import AlertCompo from './components/overlays/alert';
import DrawerCompo from './components/overlays/drawer';
import FormLayout from './components/form/formLayout';
import CheckboxCompo from './components/form/checkbox';
import FormControlCompo from './components/form/formControl';
import IconButtonCompo from './components/form/iconButton';
import InputCompo from './components/form/input';
import PinInputCompo from './components/form/pinInput';
import TextareaCompo from './components/form/textarea';
import SwitchCompo from './components/form/switch';
import ExtraCompoLayout from './components/extras/extraCompoLayout';
import ShowHideCompo from './components/extras/showHide';
import TransitionCompo from './components/extras/transitions';
import ReactHookFormCompo from './components/FormLirabries/ReacthookForm';
import FormikCompo from './components/FormLirabries/Formik';
import FormikValidationCompo from './components/FormLirabries/FormikValidation';
import StylePropLayout from './components/styleProp/stylePropLayout';
import FilterPropCompo from './components/styleProp/filter';
import PseudoPropCompo from './components/styleProp/psuedo';
import FeatureLayoutCompo from './components/features/featureLayout';
import ColorModeCompo from './components/features/colormode';
import ResponsiveStyleCompo from './components/features/responsiveStyle';
import ThemeComponentStyle from './components/features/themeCompoStyle';
import UtitlityLayout from './components/hooks/utility/UtitlityLayout';
import UseBooleanCompo from './components/hooks/utility/useBoolean';
import UseCheckBoxCompo from './components/hooks/utility/usecheckbox';
import UseRadioCompo from './components/hooks/utility/useRadio';

function App() {
  return (
    <>
    <NavBar/> 
    <Divider />
    <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/layout/*" element={<LayoutComponent />}>
            <Route path="box" element={<BoxLayout />} />
            <Route path="container" element={<ContainerComponent />} />
            <Route path="flex" element={<FlexComponent />} />
            <Route path="simple-grid" element={<SimpleGridComponent />} />
            <Route path="stack" element={<StackComponent />} />
            <Route path="wrap" element={<WrapComponent />} />
          </Route>
          <Route path="/data-display/*" element={<DisplayCompoLayout />}>
            <Route path='card' element={<CardCompo />} />
            <Route path='list' element={<ListCompo />} />
            <Route path='stat' element={<StatCompo />} />
            <Route path='table' element={<TableCompo />} />
            <Route path='tag' element={<TagCompo />} />
          </Route>
          <Route path='/overlays/*' element={<OverlayLayout /> }>
            <Route path='modal' element={<ModalCompo />} />
            <Route path='menu' element={<MenuCompo />} />
            <Route path='alert' element={<AlertCompo />} />
            <Route path='drawer' element={<DrawerCompo />} />
          </Route>
          <Route path='/form-element/*' element={<FormLayout />}>
            <Route path='checkbox' element={<CheckboxCompo />}/>
            <Route path='form-control' element={<FormControlCompo />}/>
            <Route path='icon-button' element={<IconButtonCompo />}/>
            <Route path='input' element={<InputCompo />}/>
            <Route path='pin-input' element={<PinInputCompo />}/>
            <Route path='textarea' element={<TextareaCompo />}/>
            <Route path='switch' element={<SwitchCompo />}/>
          </Route>
          <Route path='/extras/*' element={<ExtraCompoLayout />}>
            <Route path='show-hide' element={<ShowHideCompo />} />
            <Route path='transitions' element={<TransitionCompo /> } />
          </Route>
          <Route path='react-hook-form' element={<ReactHookFormCompo />}></Route>
          <Route path='formik' element={<FormikCompo />}/>
          <Route path='formik-validation' element={<FormikValidationCompo />}/>
          <Route path='/style-props/*' element={<StylePropLayout />}>
            <Route path='filter' element={<FilterPropCompo/>} />
            <Route path='pseudo' element={<PseudoPropCompo/>} />
          </Route>
          <Route path='features' element={<FeatureLayoutCompo />} >
            <Route path='colormode' element={<ColorModeCompo />} />
            <Route path='responsive-style' element={<ResponsiveStyleCompo />} />
            <Route path='theme-compo-style' element={<ThemeComponentStyle />} />
          </Route>
          <Route path='hooks-utility' element={<UtitlityLayout />}>
            <Route path='useboolean' element={<UseBooleanCompo /> }/>
            <Route path='usecheckbox' element={<UseCheckBoxCompo /> }/>
            <Route path='useradio' element={<UseRadioCompo /> }/>
          </Route>
       </Routes>
    </>
  );
}

export default App;
