<Grid container spacing={3}>
            <Grid item md={12}>
                <div className="notifications">
                    <h6>Orders Report</h6>
                </div>
            </Grid>
            <Grid item md={12}>
                <form className="date-period" onSubmit={dateSubmit}>
                    <DateRangePicker
                        label="Timeline"
                        value={dateRange}
                        onChange={setDateRange}
                        oneTap={false}
                        ranges={[
                            { label: 'Yesterday', value: [addDays(new Date(), -1), addDays(new Date(), -1)] },
                            { label: 'Today', value: [new Date(), new Date()] },
                            { label: 'Tomorrow', value: [addDays(new Date(), 1), addDays(new Date(), 1)] },
                            { label: 'Last 7 days', value: [subDays(new Date(), 6), new Date()] },
                            { label: 'This month', value: [subDays(new Date(), getDate(new Date()) - 1), new Date()] },
                            { label: 'Last month', value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))] },
                            { label: 'Year To date', value: [startOfYear(new Date()), new Date()] }]}>
                    </DateRangePicker>
                    <input name="from" type={'hidden'} value={format(dateRange[0], 'yyyy-MM-dd')} />
                    <input name="to" type={'hidden'} value={format(dateRange[1], 'yyyy-MM-dd')} />
                    <DateRangePicker
                        label="Timeline"
                        value={dateRange1}
                        onChange={setDateRange1}
                        oneTap={false}
                        ranges={[
                            { label: 'Yesterday', value: [addDays(new Date(), -1), addDays(new Date(), -1)] },
                            { label: 'Today', value: [new Date(), new Date()] },
                            { label: 'Tomorrow', value: [addDays(new Date(), 1), addDays(new Date(), 1)] },
                            { label: 'Last 7 days', value: [subDays(new Date(), 6), new Date()] },
                            { label: 'This month', value: [subDays(new Date(), getDate(new Date()) - 1), new Date()] },
                            { label: 'Last month', value: [startOfMonth(subDays(new Date(), getDate(new Date()))), endOfMonth(subDays(new Date(), getDate(new Date())))] },
                            { label: 'Year To date', value: [startOfYear(new Date()), new Date()] }]}>
                    </DateRangePicker>
                    <input name="from1" type={'hidden'} value={format(dateRange1[0], 'yyyy-MM-dd')} />
                    <input name="to1" type={'hidden'} value={format(dateRange1[1], 'yyyy-MM-dd')} />
                    <RadioGroup  style={{ display: 'inline-block', fontSize: '13px', color:'white  ', fontWeight: '500' }} onChange={(e) => { setduration(e.target.value) }}>
                        <Radio checked={duration === 'daily'} value="daily" name="duration" /> Day
                        <Radio checked={duration === 'weekly'} value="weekly" name="duration" /> Week
                        <Radio checked={duration === 'monthly'} value="monthly" name="duration" /> Month
                    </RadioGroup>
                    <input type="hidden" value="1" name="ajax_call" />
                    <input className='period-btn' variant="contained" color="secondary"  type="submit" value="Submit" />
                </form>
            </Grid>

            <Grid item md={3}>
                <Card className='dash-card'>
                    <h4>Total Order</h4>
                    {to_order && typeof to_order === "object" &&
                        <Line data={to_order} options={lineOptions} />
                    }
                    <Timeline>
                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Total                 :: {total_order_note && total_order_note[0].order} </TimelineContent>
                        </TimelineItem>
                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Min                   :: {total_order_note && total_order_note[0].min_order} </TimelineContent>
                        </TimelineItem>

                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Max                  :: {total_order_note && total_order_note[0].max_order} </TimelineContent>
                        </TimelineItem>

                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg                  :: {total_order_note && total_order_note[0].avg_order} </TimelineContent>
                        </TimelineItem>

                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Total Point          :: {total_order_note && total_order_note[0].total_point}</TimelineContent>
                        </TimelineItem>
                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Point Bellow Avg     :: {total_order_note && total_order_note[0].bellow_avg} </TimelineContent>
                        </TimelineItem>
                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} > Point Above Avg      :: {total_order_note && total_order_note[0].above_avg} </TimelineContent>
                        </TimelineItem>
                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Change               :: {total_order_note && total_order_note[0].change} </TimelineContent>
                        </TimelineItem>
                        <TimelineItem style={{minHeight:'30px',width:'200px'}}>
                            <TimelineOppositeContent style={{display:'none'}}></TimelineOppositeContent>
                            <TimelineSeparator> <TimelineDot style={{background:'mediumseagreen',boxShadow:'none'}} /><TimelineConnector style={{background:'teal'}} /></TimelineSeparator>
                            <TimelineContent style={{padding:'10px 5px',fontSize:'10px'}} >Avg Change           :: {total_order_note && total_order_note[0].avg_change}</TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card className='dash-card'>
                    
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card className='dash-card'>
                    
                </Card>
            </Grid>
            <Grid item md={3}>
                <Card className='dash-card'>
                    
                </Card>
            </Grid>
            </Grid>