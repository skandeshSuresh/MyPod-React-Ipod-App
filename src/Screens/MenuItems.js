import React from 'react';

class MenuItems extends React.Component
{
    render()
    {
        const { optionsInMenu } = this.props;
        return (
            <React.Fragment>

                {
                    // iterate over elements of menu/ sub-menu to render them in the list
                    optionsInMenu.map((item, index) =>
                    {
                        return (
                            <div className={this.props.selectedOption === index ? 'selected' : ''} key={index}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }

                {/* last element in sub-menu list */}
                {optionsInMenu.length === 3 ?
                    <div style={{color:'green'}}>
                        <p style={{fontSize:18}}>click "<i className="fas fa-backward"></i>" to go back</p>
                    </div>:''
                }
            </React.Fragment>
        )
    }
}
export default MenuItems;