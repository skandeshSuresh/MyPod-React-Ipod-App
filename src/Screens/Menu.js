import React from 'react';
import MenuItems from './MenuItems';

class Menu extends React.Component
{
    render()
    {
        const { selectedOption } = this.props;
        return (
            <div className="screen-menu">
                <div className="app-logo">
                    <h3><i>MyPod</i></h3>
                </div>
                {/* rendering menu elements in menu */}
                <MenuItems
                    optionsInMenu={this.props.optionsInMenu}
                    selectedOption={selectedOption}
                />
            </div>
        )
    }
}

export default Menu;