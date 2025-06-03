import React from 'react';
import MetricCard from '../components/MetricCard';
import ProgressBar from '../components/ProgressBar';
import SimpleBarChart from '../components/SimpleBarChart';
import styles from './page.module.css';

export default function AnalyticsDashboard() {
  // Sample data for charts
  const monthlyRevenueData = [
    { label: 'Jan', value: 45000, color: 'accent' as const },
    { label: 'Feb', value: 52000, color: 'accent' as const },
    { label: 'Mar', value: 48000, color: 'accent' as const },
    { label: 'Apr', value: 61000, color: 'success' as const },
    { label: 'May', value: 58000, color: 'accent' as const },
    { label: 'Jun', value: 67000, color: 'success' as const },
  ];

  const channelPerformanceData = [
    { label: 'Organic Search', value: 42, color: 'success' as const },
    { label: 'Social Media', value: 28, color: 'accent' as const },
    { label: 'Email', value: 18, color: 'warning' as const },
    { label: 'Direct', value: 12, color: 'neutral' as const },
  ];

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className="title-page">Analytics Dashboard</h1>
        <p className="body-base">
          Real-time insights and performance metrics for your business
        </p>
      </div>

      <div className={styles.content}>
        {/* Metric Cards Section */}
        <section className={styles.section}>
          <h2 className="heading">Key Metrics</h2>
          <div className={styles.metricsGrid}>
            <MetricCard
              title="Total Revenue"
              value="$47,382"
              change={{ value: "+12.3%", type: "positive" }}
              subtitle="vs last month"
              icon="💰"
            />
            
            <MetricCard
              title="Active Users"
              value="8,249"
              change={{ value: "+8.1%", type: "positive" }}
              subtitle="daily active users"
              icon="👥"
              variant="highlighted"
            />
            
            <MetricCard
              title="Conversion Rate"
              value="3.47%"
              change={{ value: "-0.3%", type: "negative" }}
              subtitle="from visitors to customers"
              icon="📈"
            />
            
            <MetricCard
              title="Avg Order Value"
              value="$127"
              change={{ value: "+2.1%", type: "positive" }}
              subtitle="per transaction"
              icon="🛒"
            />
            
            <MetricCard
              title="Customer Satisfaction"
              value="4.8/5"
              change={{ value: "0.0", type: "neutral" }}
              subtitle="based on 1,247 reviews"
              icon="⭐"
            />
            
            <MetricCard
              title="Page Load Time"
              value="1.2s"
              change={{ value: "-0.1s", type: "positive" }}
              subtitle="average response time"
              icon="⚡"
            />
          </div>
        </section>

        {/* Goal Progress Section */}
        <section className={styles.section}>
          <h2 className="heading">Goal Progress</h2>
          <div className={styles.progressGrid}>
            <div className={styles.progressCard}>
              <ProgressBar
                label="Monthly Revenue Target"
                value={67000}
                max={80000}
                variant="success"
                showValue={true}
                animated={true}
              />
            </div>
            
            <div className={styles.progressCard}>
              <ProgressBar
                label="User Acquisition Goal"
                value={8249}
                max={10000}
                variant="accent"
                showValue={true}
                striped={true}
              />
            </div>
            
            <div className={styles.progressCard}>
              <ProgressBar
                label="Customer Satisfaction"
                value={96}
                max={100}
                variant="warning"
                showValue={true}
                size="large"
              />
            </div>
            
            <div className={styles.progressCard}>
              <ProgressBar
                label="Server Uptime"
                value={99.8}
                max={100}
                variant="critical"
                showValue={true}
                animated={true}
              />
            </div>
          </div>
        </section>

        {/* Charts Section */}
        <section className={styles.section}>
          <h2 className="heading">Performance Overview</h2>
          <div className={styles.chartsGrid}>
            <div className={styles.chartCard}>
              <SimpleBarChart
                title="Monthly Revenue ($)"
                data={monthlyRevenueData}
                height={280}
                showValues={true}
                animated={true}
                variant="rounded"
              />
            </div>
            
            <div className={styles.chartCard}>
              <SimpleBarChart
                title="Traffic Sources (%)"
                data={channelPerformanceData}
                height={280}
                showValues={true}
                horizontal={true}
                animated={true}
                variant="rounded"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 