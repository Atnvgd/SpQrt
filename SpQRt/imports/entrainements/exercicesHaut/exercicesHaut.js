import './exercicesHaut.html';
import './exercice10/exercice10.js';
import './exercice11/exercice11.js';
import './exercice13/exercice13.js';
import './exercice14/exercice14.js';
import './exercice15/exercice15.js';

Template.app_body.events({

    'click #exercice10' (event) {
        event.preventDefault();
        FlowRouter.go('exercice10');
    },

    'click #exercice11' (event) {
        event.preventDefault();
        FlowRouter.go('exercice11');
    },

    'click #exercice13' (event) {
        event.preventDefault();
        FlowRouter.go('exercice13');
    },

    'click #exercice14' (event) {
        event.preventDefault();
        FlowRouter.go('exercice14');
    },

    'click #exercice15' (event) {
        event.preventDefault();
        FlowRouter.go('exercice15');
    },
});