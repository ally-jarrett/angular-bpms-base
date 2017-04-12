angular.module('angularWebApp').constant('Constants', {
    processState: [  
        { Id: 0, bpmState: 'Pending', uiState: 'Pending', Icon: 'fa-clock-o' },
        { Id: 1, bpmState: 'Active', uiState: 'In Progress', Icon: 'fa-thumbs-up' },
        { Id: 2, bpmState: 'Completed', uiState: 'Complete', Icon: 'fa-check' },
        { Id: 3, bpmState: 'Aborted', uiState: 'Cancelled', Icon: 'fa-exclamation-triangle' },
        { Id: 4, bpmState: 'Suspended', uiState: 'Paused', Icon: 'fa-pause-circle' }
    ]
});


