import React from 'react';
import './styles/App.css';
import Buttons from './Buttons';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import 'lodash';
import $ from 'jquery';

class App extends React.Component
{
    constructor()
    {
        super();
        this.temp_change_in_angle = 0;
        this.temp_selected = 0;
        this.state = {
            options: ['Games', 'Music', 'Settings', 'CoverFlow'],
            change_in_angle: 0,
            selected: 0,
            showPage: -1,
            general_menu: ['Games', 'Music', 'Settings', 'Cover Flow'],
            songs_sub_menu: ['All Songs', 'Artists', 'Albums'],
        }
    }

    componentDidMount()
    {
        // function for rotating on buttons circle called when app is mounted to browser DOM
        var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
        zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
        {
            //this rotating facility will only be available when the side bar is shown to the user.
            if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))
            {
                let dist = event.detail.distanceFromLast;
                this.temp_change_in_angle += dist;
                if (this.temp_change_in_angle > 60)
                {
                    this.temp_selected++;
                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                    });

                    this.temp_change_in_angle = 0;
                }
                else if (this.temp_change_in_angle < -60)
                {
                    this.temp_selected--;
                    if (this.temp_selected === -1)
                        this.temp_selected = this.state.options.length - 1;

                    this.temp_selected = this.temp_selected % this.state.options.length;
                    this.setState({
                        selected: this.temp_selected,
                    });
                    this.temp_change_in_angle = 0;
                }
            }

        });
    }

    menuButtonClicked = () =>
    {
        
        let screenMenuClassList = document.getElementsByClassName('screen-menu')[0].classList;
        if (screenMenuClassList.contains('width-50'))
        {
            $('.screen-menu').removeClass('width-50');//hide menu
        }
        else
        {
            $('.screen-menu').addClass('width-50');//show menu
        }
    }

    selectButtonClicked = () =>
    {
        // if we click on the music option
        if (this.state.selected === 1 && this.state.options.length === 4)
        {
            this.setState(
                {
                    options: this.state.songs_sub_menu,
                    selected: 0,
                    showPage: -1,
                }
            );
            return;
        }
        
        // when centre button is clicked
        this.setState({
            showPage: this.state.selected,
            selected: 0
        });
        this.menuButtonClicked();
    }


    leftButtonClicked = () =>
    {
        // works only if we're in music sub-menu
        if (this.state.options.length === 3)
            this.setState(
                {
                    options: this.state.general_menu,
                    selected: 0
                }
            );
    }
    rotatePod=()=>
    {
        /* screen rotation feature */
        /* toggle between landscape and portrait mode */
        $('.App').toggleClass('rotate-anti-clockwise');
        $('.buttons-container').toggleClass('rotate-clockwise');
        $('.screen-container').toggleClass('rotate-clockwise');
    }

    // render the Screen and Button componenents and passes them the necessary props
    render()
    {
        return (
            <div className="App">
                {/* for fontawesome icons usage */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>
                
                <Screen
                    selectedOption={this.state.selected}
                    showPage={this.state.showPage}
                    optionsInMenu={this.state.options}
                />
                <Buttons
                    menuButtonClicked={this.menuButtonClicked}
                    selectButtonClicked={this.selectButtonClicked}
                    leftButtonClicked={this.leftButtonClicked}
                />
                <button className="rotate" onClick={this.rotatePod}>
                    <i className="fas fa-undo"></i>
                </button>
            </div>
        );
    }

}

export default App;
