import React, { useState, useEffect } from 'react';
// import history from './history';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
// import { useHistory } from 'react-router-dom';
import { Gamemode } from './index';
import { Link, Route, useHistory } from 'react-router-dom';
// import Gamebtn from './Gamebtn';
import { GamemodeCon } from './GamemodeCon';

import { render } from 'react-dom';

const YourMissionComp = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({
    read: false,
    write: false,
    draw: false,
    mode: 'single',
  });
  const [sP, setsP] = useState(true);
  //   history.push('/gamemode/single');

  // useEffect(() => {
  //   const propInit = () => {
  //     if (props.child.gamemode !== null) {
  //       props.child.gamemode = {
  //         mode: 'single',
  //         read: rwd.read,
  //         write: rwd.write,
  //         draw: rwd.draw,
  //         sp: sP,
  //       };
  //     } else {
  //       props.child.gamemode = {
  //         mode: 'select',
  //         read: false,
  //         write: false,
  //         draw: false,
  //         sp: false,
  //       };
  //     }
  //   };
  //   propInit();
  // }, [rwd, props.child]);

  useEffect(() => {
    const inofit = () => {
      if (props.child.gamemode.sp === false) {
        setsP(false);
      } else {
        setsP(true);
      }
    };
    inofit();
  }, [sP, props.child]);

  const sread = e => {
    const ff = e.target.textContent;
    switch (ff) {
      case 'Read': {
        setsRwd({ read: !rwd.read, write: rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: !props.child.gamemode.read,
          write: rwd.write,
          draw: rwd.draw,
          sp: true,
        };

        console.log('nalread ', props.child.gamemode);
        break;
      }
      case 'Write': {
        setsRwd({ read: rwd.read, write: !rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read,
          write: !props.child.gamemode.write,
          draw: rwd.draw,
          sp: true,
        };
        console.log('nalwrirte ', props.child.gamemode);

        break;
      }
      case 'Draw': {
        setsRwd({ read: rwd.read, write: rwd.write, draw: !rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read,
          write: rwd.write,
          draw: !props.child.gamemode.draw,
          sp: true,
        };
        console.log('naldraw ', props.child.gamemode);
        break;
      }
      case 'Play Boss': {
        setsRwd({
          read: rwd.read,
          write: rwd.write,
          draw: rwd.draw,
          mode: 'boss',
        });
        props.child.gamemode = {
          mode: 'boss',
          read: rwd.read,
          write: rwd.write,
          draw: rwd.draw,
          sp: true,
        };
        push('/gamemode/boss');
        console.log('nal boss ', props.child.gamemode);
        break;
      }
      default: {
        // setsRwd({ read: !rwd.read, write: !rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'select',
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          sp: false,
        };
        console.log('naldefault ', props.child.gamemode);
        break;
      }
    }

    // push('/gamemode/single');
    // push('/gamemode/single');
    // console.log('zzzz ',props.child.gamemode);
  };
  const singled = r => {
    setsP(false);
    // e.preventDefault();
    rwd.read = false;
    rwd.draw = false;
    rwd.write = false;
    props.child.gamemode = {
      mode: 'select',
      read: false,
      write: false,
      draw: false,
      sp: false,
    };
    push('/gamemode');
    // push('/gamemode/single');
    console.log('nal else ', props.child);
  };
  // const forceUpdateHandler = () => {
  //   this.forceUpdate();
  // };

  //   console.log(history);

  //   console.log(history);
  return (
    <>
      <Header />
      <div>
        <Row className="rectangle125-box">
          <Col className="your-mission rectangle125">
            <h1>Your Mission</h1>
            <Row className="rectangle12B5 read-button-font">
              {
                // Number when button not clicked
                // or Check mark when clicked
              }
              <Col className="gamemodebtncolclass">
                <button id="mission-read-button">1</button>
                <p className="read-button-font">Read</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button id="mission-write-button">2</button>
                <p className="read-button-font">Write</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button id="mission-draw-button">3</button>
                <p className="read-button-font">Draw</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div className="rectangle130">
        <Row className="btmRow">
          <Col className="img-lightingKid-col">
            <img src="../../../assets/images/gamemodeimg/LightingKid.png" />
          </Col>
          <Col>
            <h1 className="dont4get">DON'T FORGET!</h1>
            <p className="dont4get-p">
              When you're finished drawing, snap a photo and upload your
              masterpiece.
            </p>
            <button className="kids-story-upload kids-story-upload-font">
              Upload you're drawing
            </button>
            <p className="id-rather-choose-another-choice-font">
              I'd rather write
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(YourMissionComp);
// export default connect()(Gamemode);
