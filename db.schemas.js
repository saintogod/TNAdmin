/* global db */
/* exported getNextSequence */
'use strict';


db.counters.drop();
db.counters.insert({_id:'TaskId', seq:0});
function getNextSequence(name) {
   var ret = db.counters.findAndModify(
          {
            query: { _id: name },
            update: { $inc: { seq: 1 } },
            new: true,
            upsert: true
          }
   );
   return ret.seq;
}

/*
    Status: -1: Offline, 0: Idle, 1: Locked
 */

db.nodes.drop();
db.nodes.insert({NodeName:'v-sh-tn1', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn2', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn3', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn4', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn5', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn6', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn7', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn8', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn9', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn10', Status: 'Offline', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn11', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn12', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn13', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn14', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn15', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn16', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn17', Status: 'Locked', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn18', Status: 'Idle', CurTask: null});
db.nodes.insert({NodeName:'v-sh-tn19', Status: 'Idle', CurTask: null});

/*
    TaskType: 1: Lock, 2: Script, 3: Build, 4: Test
    Stage: 0: Pending, 1: Preparing, 2: Building, 3: BuildSucceed, 4 BuildFailed, 
            5: Testing, 6: TestSucceed, 7: TestFailed, 8: ScriptRunning, 9: Locking
 */
db.tasks.drop();
db.tasks.insert([{
    _id: 1,
    UsedBy: 'st',
    NodeName:'v-sh-tn1',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-05-28 12:50:45'),
    StartDate: new Date('2014-05-30 10:10:03'),
    EndDate: new Date('2014-06-01 01:32:33'),
    ReleaseDate: new Date('2016-06-02 13:23:20'),
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140528\\buildlog.log',
        Output: 'C:\\20140528\\output.txt',
        Result: {
            HTML: 'C:\\20140528\\html.html',
            XML: 'C:\\20140528\\xml.xml'
        }
    },
    Comment:[]
},{
    _id: 2,
    UsedBy: 'st',
    NodeName:'v-sh-tn3',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-05-20 12:50:45'),
    StartDate: new Date('2014-05-25 10:10:03'),
    EndDate: new Date('2014-05-28 01:32:33'),
    ReleaseDate: new Date('2014-05-28 13:23:20'),
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140520\\buildlog.log',
        Output: 'C:\\20140520\\output.txt',
        Result: {
            HTML: 'C:\\20140520\\html.html',
            XML: 'C:\\20140520\\xml.xml'
        }
    },
    Comment:["Don't know why!"]
},{
    _id: 3,
    UsedBy: 'st',
    NodeName:'v-sh-tn2',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'include:QFA',
    CreateDate: new Date('2014-06-01 12:50:45'),
    StartDate: new Date('2014-06-02 10:10:03'),
    EndDate: new Date('2014-06-03 01:32:33'),
    ReleaseDate: new Date('2014-06-04 13:23:20'),
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140601\\buildlog.log',
        Output: 'C:\\20140601\\output.txt',
        Result: {
            HTML: 'C:\\20140601\\html.html',
            XML: 'C:\\20140601\\xml.xml'
        }
    }
},{
    _id: 4,
    UsedBy: 'st',
    NodeName:'v-sh-tn2',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-30 10:10:03'),
    EndDate: new Date('2014-07-01 01:32:33'),
    ReleaseDate: new Date('2014-07-02 13:23:20'),
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140630\\buildlog.log',
        Output: 'C:\\20140630\\output.txt',
        Result: {
            HTML: 'C:\\20140630\\html.html',
            XML: 'C:\\20140630\\xml.xml'
        }
    }
},{
    _id: 5,
    UsedBy: 'st',
    NodeName:'v-sh-tn3',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-07-07 12:50:45'),
    StartDate: new Date('2014-07-08 10:10:03'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Testing',
    Logs: {
        BuildLog: 'C:\\20140708\\buildlog.log'
    }
},{
    _id: 6,
    UsedBy: 'st',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: null,
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Pending',
    TargetMachines:[]
},{
    _id: 7,
    UsedBy: 'st',
    TaskType: 'Lock',
    NodeName: 'v-sh-tn1',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-28 12:50:45'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Locking',
},{
    _id: 8,
    UsedBy: 'st',
    NodeName:'v-sh-tn4',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-05-28 12:50:45'),
    StartDate: new Date('2014-05-30 10:10:03'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Testing',
    Comment:[]
},{
    _id: 9,
    UsedBy: 'st',
    NodeName:'v-sh-tn6',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-05-20 12:50:45'),
    StartDate: new Date('2014-05-25 10:10:03'),
    EndDate: new Date('2014-05-28 01:32:33'),
    ReleaseDate: null,
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140520\\buildlog.log',
        Output: 'C:\\20140520\\output.txt',
        Result: {
            HTML: 'C:\\20140520\\html.html',
            XML: 'C:\\20140520\\xml.xml'
        }
    },
    Comment:["Don't know why!"]
},{
    _id: 10,
    UsedBy: 'st',
    NodeName:'v-sh-tn7',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/helloworld',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-30 10:10:03'),
    EndDate: new Date('2014-07-01 01:32:33'),
    ReleaseDate: new Date('2014-07-02 13:23:20'),
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140630\\buildlog.log',
        Output: 'C:\\20140630\\output.txt',
        Result: {
            HTML: 'C:\\20140630\\html.html',
            XML: 'C:\\20140630\\xml.xml'
        }
    }
},{
    _id: 11,
    UsedBy: 'st',
    NodeName:'v-sh-tn7',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'include:QFA',
    CreateDate: new Date('2014-06-01 12:50:45'),
    StartDate: new Date('2014-06-02 10:10:03'),
    EndDate: new Date('2014-06-03 01:32:33'),
    ReleaseDate: null,
    Stage: 'TestSucceed',
    Logs: {
        BuildLog: 'C:\\20140601\\buildlog.log',
        Output: 'C:\\20140601\\output.txt',
        Result: {
            HTML: 'C:\\20140601\\html.html',
            XML: 'C:\\20140601\\xml.xml'
        }
    }
},{
    _id: 12,
    UsedBy: 'st',
    NodeName:'v-sh-tn8',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-07-07 12:50:45'),
    StartDate: new Date('2014-07-08 10:10:03'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Testing',
    Logs: {
        BuildLog: 'C:\\20140708\\buildlog.log'
    }
},{
    _id: 13,
    UsedBy: 'st',
    TaskType: 'Test',
    TargetProject: 'WA',
    SVNUrl: 'http://v-sh-svn/svn/lf/parts/webadmin/feats/hele',
    Revision: 405625,
    TestArg:'',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: null,
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Pending',
    TargetMachines:[]
},{
    _id: 14,
    UsedBy: 'st',
    TaskType: 'Lock',
    NodeName: 'v-sh-tn9',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-28 12:50:45'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Locking',
},{
    _id: 15,
    UsedBy: 'st',
    TaskType: 'Lock',
    NodeName: 'v-sh-tn12',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-28 12:50:45'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Locking',
},{
    _id: 16,
    UsedBy: 'st',
    TaskType: 'Lock',
    NodeName: 'v-sh-tn14',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-28 12:50:45'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Locking',
},{
    _id: 17,
    UsedBy: 'st',
    TaskType: 'Lock',
    NodeName: 'v-sh-tn17',
    CreateDate: new Date('2014-06-28 12:50:45'),
    StartDate: new Date('2014-06-28 12:50:45'),
    EndDate: null,
    ReleaseDate: null,
    Stage: 'Locking',
}]);

db.nodes.update({NodeName:'v-sh-tn1'}, {$set:{CurTask: { $ref: 'tasks', $id: 7}}});
db.nodes.update({NodeName:'v-sh-tn3'}, {$set:{CurTask: { $ref: 'tasks', $id: 5}}});
db.nodes.update({NodeName:'v-sh-tn4'}, {$set:{CurTask: { $ref: 'tasks', $id: 7}}});
db.nodes.update({NodeName:'v-sh-tn6'}, {$set:{CurTask: { $ref: 'tasks', $id: 9}}});
db.nodes.update({NodeName:'v-sh-tn7'}, {$set:{CurTask: { $ref: 'tasks', $id: 12}}});
db.nodes.update({NodeName:'v-sh-tn9'}, {$set:{CurTask: { $ref: 'tasks', $id: 14}}});
db.nodes.update({NodeName:'v-sh-tn12'}, {$set:{CurTask: { $ref: 'tasks', $id: 15}}});
db.nodes.update({NodeName:'v-sh-tn14'}, {$set:{CurTask: { $ref: 'tasks', $id: 16}}});
db.nodes.update({NodeName:'v-sh-tn17'}, {$set:{CurTask: { $ref: 'tasks', $id: 17}}});
