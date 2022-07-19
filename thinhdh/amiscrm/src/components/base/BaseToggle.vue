<template>
    <div class="crm-toggleWrapper" :class="{switchDisable : isDisabled}">
        <div class="crm-toggleTitle">{{switchText}}</div>
        <input type="checkbox" id="switchToggle" class="crm-switch-toggle"
        :class="{switchCheckFunction : switchCheckFunction}"
        />
        <div class="toggleStatus" id="switchStatus">Off</div>
    </div>
</template>

<script>
    
export default {
    name: 'BaseToggle',
    components: {

    },
    props: {
        switchText: {
            type: String,
            default: () => 'Switch'
        },
        switchDisabled: {
            type: Boolean,
        }
        
    },
    computed: {
        /**
         * Kiểm tra trạng của check box để đưa ra text on or off
         * Author: DHTHINH (18/07/2022)
         */
        // switchCheckFunction() {
        //     var checkbox_toggle = document.getElementsById("switchToggle");
        //     console.log(checkbox_toggle);
        //     if (checkbox_toggle != null) {
        //         checkbox_toggle.addEventListener('change', function(){
        //         if (document.getElementsById("switchToggle").checked == true){
        //             document.getElementsById("switchStatus").innerHTML = "On";
        //         }
        //         if (document.getElementsById("switchToggle").checked == false){
        //             document.getElementsById("switchStatus").innerHTML = "Off";
        //         }
        //     })
        //     }
        //     return checkbox_toggle;
        // },
        isDisabled() {
            return this.switchDisabled ? true : false
        },
    }
}
</script>

<style>
    :root {
        --transition-effect: 0.25s cubic-bezier(.16,-1.09,.94,2.16) 0.2s;
    }
    .crm-toggleWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .crm-switch-toggle {
        margin: 0;
        cursor: pointer;
        width: 28px;
        height: 16px;
        appearance: none;
        background-color: #99A1B2;
        border-radius: 12px;
        position: relative;
        box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.3);
        transition: var(--transition-effect);
    }
    .switch-toggle::before {
        content: "";
        width: 14px;
        height: 14px;
        background-color: #ffffff;
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 50%;
        box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
        transition: var(--transition-effect);
    }

    .switch-toggle:checked {
        background-color: #31B491;
    }

    .switch-toggle:checked::before {
        left: 13px;
    }

    .switchDisable {
        opacity: 30%;
        cursor: default;
    }
    
    .toggleStatus {
        margin-left: 8px;
    }

    .crm-toggleTitle {
        margin-right: 10px;
    }
</style>