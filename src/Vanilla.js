import React from 'react';
import moment from 'moment';

import Svg from './SvgTest';
import Input from './Input';

const m1 = link => <section className="link-slideup">{'Brunch coloring book live-edge '}{link}{' actually, sriracha lomo iceland ethical helvetica. Lomo vegan direct trade, fap viral offal wolf chambray street art swag fingerstache. Locavore meggings brooklyn brunch, ugh keytar tacos asymmetrical tofu 3 wolf moon retro pork belly. Tote bag activated charcoal ennui ethical retro, fixie small batch freegan sriracha lumbersexual hoodie. Retro sriracha waistcoat shoreditch, pitchfork subway tile farm-to-table tbh viral etsy 3 wolf moon selfies YOLO blue bottle. Everyday carry wolf asymmetrical, retro kickstarter direct trade mixtape waistcoat plaid. Church-key iPhone literally echo park kinfolk, fam franzen celiac ugh direct trade.'}</section>;

const m2 = 'Asymmetrical irony enamel pin kitsch everyday carry. Keffiyeh raclette affogato leggings meh franzen bitters knausgaard readymade yuccie 8-bit fam migas. Gastropub franzen gochujang kitsch meggings, humblebrag la croix kickstarter swag etsy cardigan quinoa YOLO beard. Iceland fanny pack etsy sartorial four loko. Seitan humblebrag kale chips activated charcoal austin prism. Hella put a bird on it mixtape gentrify, activated charcoal vice shoreditch echo park. Farm-to-table truffaut vinyl man braid viral, unicorn bespoke brunch chambray pitchfork forage.';

const m3 = [
  'Brunch coloring book live-edge ',
  <a href="/">chartreuse</a>,
  ' actually, sriracha lomo iceland ethical helvetica. Lomo vegan direct trade, fap viral offal wolf chambray street art swag fingerstache. Locavore meggings brooklyn brunch, ugh keytar tacos asymmetrical tofu 3 wolf moon retro pork belly. Tote bag activated charcoal ennui ethical retro, fixie small batch freegan sriracha lumbersexual hoodie. Retro sriracha waistcoat shoreditch, pitchfork subway tile farm-to-table tbh viral etsy 3 wolf moon selfies YOLO blue bottle. Everyday carry wolf asymmetrical, retro kickstarter direct trade mixtape waistcoat plaid. Church-key iPhone literally echo park kinfolk, fam franzen celiac ugh direct trade.',
];

const Vanilla = ({ name, fruit = 'strawberry', change, value, svgClick }) => (
  <div className="paper">
    <h2>{name}</h2>
    <button onClick={svgClick}>MENU</button>
    <h3>Rendered at {moment().format('hh:mm:ss')}</h3>
    <h4>{fruit}</h4>
    {m1(<a href="/">chartreuse</a>)}
    <br />
    <section className="link-slideup">{m3}</section>
    <section>{`This is a template string with ${<a href="www.example.com">some</a>} link.`}</section>
    <div className="formContainer">
      <Input label="A FIELD TO TYPE IN" what={change} value={fruit} />
    </div>
    <button onClick={() => change('grapefruit')}>CHANGE ME</button>
    <p className="font_small">{m2}</p>
  </div>
);

export default Vanilla;
