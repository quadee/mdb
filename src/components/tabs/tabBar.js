import React, {Component} from 'react';

import {Flex, Heading} from "@chakra-ui/core";
import TabBarNav from './tabBarNav';

class TabBar extends Component {
    state = {
        currentTab: null,
    };

    componentDidMount() {
        const { children = [] } = this.props;

        const activeTab = this.getTabLabels(children)[0];
        
        this.setActiveTab(activeTab);
    }

    getTabLabels = (children) => {
        return children.map( child => child.props.label );
    }

    setActiveTab = (activeTab) => {
        if (this.state.currentTab !== activeTab) {
            this.setState({currentTab: activeTab});
        }
    }

    renderTabs = () => {
        const {children = []} = this.props;
        const { currentTab } = this.state;

        return this.getTabLabels(children).map( navLabel => (
            <TabBarNav
                key={navLabel}
                navLabel={navLabel}
                onChangeActiveTab={this.setActiveTab}
                activeTab={currentTab === navLabel}
            />
        ))   
}


    render() {
        const {children} = this.props;
        const {currentTab: activeTab} = this.state;

        return(
            <Flex w="92%" direction="column" mt="20px">
                <Flex h='50px' justify="flex-start" align="center">
                    <Heading fontSize="17px" fontFamily="Open Sans" fontWeight="600" m="15px">
                        {this.props.tabHeading}
                    </Heading>
                    {this.renderTabs()}
                </Flex>
                <Flex>
                    {React.Children.map(children, child => React.cloneElement(child, {activeTab} ))}
                </Flex>
            </Flex>
        )
    }
}

export default TabBar;