import React from "react"
import {isEditMode} from "mobro/utils/layout";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {closeSidebarComponent, toggleSidebarComponent, withSidebar} from "mobro/utils/sidebar";
import ComponentSelection from "mobro/containers/edit/ComponentSelection";
import IconButton from "mobro/containers/edit/button/IconButton";

function AddComponentButton(props) {
    const {
        path = "",
        layoutMode,
        addComponent,
        allowed = []
    } = props;

    if (!isEditMode(layoutMode)) {
        return null;
    }

    const
        name = `add_component_${path}`,
        title = "Add Component",
        content = (<ComponentSelection allowed={allowed} onSelect={(type) => {
            addComponent({path, type});
            closeSidebarComponent(name);
        }}/>);

    withSidebar({name, title, content});

    return (
        <IconButton icon={"plus"} className={"w-100"} onClick={() => toggleSidebarComponent(name)}>
            Add Component
        </IconButton>
    );
}

export default AddComponentButton;