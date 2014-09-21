(function() {
    'use strict';

    angular.module('tna.Services').factory('GridService', GridService);

    function GridService() {

        var colDefs = {
            TaskId: {
                name: 'TaskId',
                enableSorting: true,
                displayName: 'ID',
                enableFiltering: false,
                field: '_id',
                maxWidth: 100,
                minWidth: 50
            },
            UsedBy: {
                name: 'UsedBy',
                enableSorting: true,
                displayName: 'User',
                enableFiltering: true,
                field: 'UsedBy',
                maxWidth: 100,
                minWidth: 50
            },
            NodeName: {
                name: 'NodeName',
                enableSorting: true,
                displayName: 'Node',
                enableFiltering: true,
                field: 'NodeName',
                maxWidth: 100,
                minWidth: 50
            },
            TaskType: {
                name: 'TaskType',
                enableSorting: true,
                displayName: 'Type',
                enableFiltering: true,
                field: 'TaskType',
                maxWidth: 100,
                minWidth: 50
            },
            TargetProject: {
                name: 'TargetProject',
                enableSorting: true,
                displayName: 'Project',
                enableFiltering: true,
                field: 'TargetProject',
                maxWidth: 100,
                minWidth: 50
            },
            Revision: {
                name: 'Revision',
                enableSorting: true,
                displayName: 'Revision',
                enableFiltering: true,
                field: 'Revision',
                maxWidth: 100,
                minWidth: 50
            },
            SVNUrl: {
                name: 'SVNUrl',
                enableSorting: true,
                displayName: 'SVN Url',
                enableFiltering: true,
                field: 'SVNUrl',
                maxWidth: 200,
                minWidth: 100
            },
            TestArg: {
                name: 'TestArg',
                enableSorting: false,
                displayName: 'Nunit Arg',
                enableFiltering: false,
                field: 'TestArg',
                maxWidth: 200,
                minWidth: 100
            },
            Stage: {
                name: 'Stage',
                enableSorting: false,
                displayName: 'Stage',
                enableFiltering: false,
                field: 'Stage',
                maxWidth: 200,
                minWidth: 100
            },
            CreateDate: {
                name: 'CreateDate',
                enableSorting: true,
                displayName: 'Create Date',
                enableFiltering: false,
                field: 'CreateDate',
                filter: 'date:"yyyy-MM-dd HH:mm:ss"',
                maxWidth: 200,
                minWidth: 100
            },
            StartDate: {
                name: 'StartDate',
                enableSorting: true,
                displayName: 'Start Date',
                enableFiltering: false,
                field: 'StartDate',
                filter: 'date:"yyyy-MM-dd HH:mm:ss"',
                maxWidth: 200,
                minWidth: 100
            },
            FinishDate: {
                name: 'FinishDate',
                enableSorting: true,
                displayName: 'Finish Date',
                enableFiltering: false,
                field: 'FinishDate',
                filter: 'date:"yyyy-MM-dd HH:mm:ss"',
                maxWidth: 200,
                minWidth: 100
            },
            ReleaseDate: {
                name: 'ReleaseDate',
                enableSorting: true,
                displayName: 'Release Date',
                enableFiltering: false,
                field: 'ReleaseDate',
                filter: 'date:"yyyy-MM-dd HH:mm:ss"',
                maxWidth: 100,
                minWidth: 50
            },
            Logs: {
                name: 'Logs',
                enableSorting: false,
                displayName: 'Logs',
                enableFiltering: false,
                field: 'Logs',
                cellTemplate:'<div><a href="{{::row.entity.Logs.BuildLog}}">BuildLog</a><a href="{{::row.entity.Logs.Output}}">Output</a><a href="{{::row.entity.Logs.Result.HTML}}">HTMLs Result</a><a href="{{::row.entity.Logs.Result.XML}}">XML Result</a></div>',
                maxWidth: 100,
                minWidth: 50
            },
            TargetMachines: {
                name: 'TargetMachines',
                enableSorting: false,
                displayName: 'Run On',
                enableFiltering: false,
                field: 'TargetMachines.join(", ")',
                maxWidth: 100,
                minWidth: 50
            }
        };
        var gridDefs = {
            PendingGrid: [colDefs.TaskId, colDefs.UsedBy, colDefs.TaskType, colDefs.TargetProject, colDefs.SVNUrl, colDefs.Revision, colDefs.CreateDate, colDefs.TargetMachines],
            FinishedGrid: [colDefs.TaskId, colDefs.UsedBy, colDefs.NodeName, colDefs.TaskType, colDefs.TargetProject, colDefs.SVNUrl, colDefs.Revision, colDefs.CreateDate, colDefs.StartDate, colDefs.FinishDate, colDefs.ReleaseDate, colDefs.Stage, colDefs.Logs]
        };

        var gridService = {columnDefs: colDefs, gridDefs : gridDefs};

        return gridService;
    }

})();