var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Job Position Model
 * ==========
 */

var JobPosition = new keystone.List('JobPosition', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true },
    defaultSort: '-updatedAt',
});

JobPosition.add({
    title: { type: String, required: true },
    status: { type: Types.Select, options: 'draft, applied, Phone Interview Scheduled, Phone Interview Done, Behavioral Interview Scheduled, Behavioral Interview Done, Waiting for Offer, No Offer, Got Offer', default: 'draft', index: true },
    author: { type: Types.Relationship, ref: 'User', index: true },
    dateApplied: { type: Types.Date, index: true, dependsOn: { status: 'applied' } },
    // lastUpdate: { type: Types.Date, index: true, dependsOn: { } },
    company: { type: Types.Text },
    industry: { type: Types.Text},
    companySize: { type: Types.Select, options:'0~50, 51~200, 201~500, 500~1000, 1000~5000, 5000+, 10000+' },
    linkToJobDescription: { type: Types.Url },
    pointOfContact: { type: Types.Name},
    applicationMethod: { type: Types.Select, options: 'Online App, MeetUp, Networking Event, Hiring Manager Cold Email, Infomational Interview, Referral, Other'},
    notes: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
    },
});

JobPosition.schema.virtual('content.full').get(function () {
    return this.content.extended || this.content.brief;
});

JobPosition.defaultColumns = 'title, status|20%, author|20%, publishedDate|20%';
JobPosition.register();
