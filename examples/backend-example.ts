import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { Lead, LeadStatus, LeadSource, Organization } from 'leadhql-shared-types';

// Example NestJS service using the shared types
class LeadsService {
  private leads: Lead[] = [];

  findAll(): Lead[] {
    return this.leads;
  }

  findOne(id: number): Lead | undefined {
    return this.leads.find(lead => lead.id === id);
  }

  create(lead: Partial<Lead>): Lead {
    const newLead: Lead = {
      id: this.leads.length + 1,
      firstName: lead.firstName || '',
      lastName: lead.lastName || '',
      email: lead.email || '',
      phoneNumber: lead.phoneNumber || '',
      city: lead.city || '',
      source: lead.source || LeadSource.META,
      status: LeadStatus.AVAILABLE,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    this.leads.push(newLead);
    return newLead;
  }

  updateStatus(id: number, status: LeadStatus): Lead | undefined {
    const lead = this.findOne(id);
    if (lead) {
      lead.status = status;
      lead.updatedAt = new Date();
      
      if (status === LeadStatus.PURCHASED) {
        lead.purchasedAt = new Date();
      }
    }
    return lead;
  }
}

// Example NestJS controller using the shared types
@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get()
  findAll(): Lead[] {
    return this.leadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Lead | undefined {
    return this.leadsService.findOne(+id);
  }

  @Post()
  create(@Body() createLeadDto: Partial<Lead>): Lead {
    return this.leadsService.create(createLeadDto);
  }

  @Post(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('status') status: LeadStatus
  ): Lead | undefined {
    return this.leadsService.updateStatus(+id, status);
  }
} 