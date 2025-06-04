import React from 'react';
import Button from '@/components/Button/Button';
import DocsLayout, { DocsSection, DocsExample } from '@/components/layout/DocsLayout';

interface ButtonVariantExample {
  title: string;
  description: string;
  variant: 'primary' | 'secondary' | 'ghost';
  code: string;
}

const buttonVariants: ButtonVariantExample[] = [
  {
    title: 'Primary button',
    description: 'Use primary buttons for main calls to action. Limit primary buttons to one per view.',
    variant: 'primary',
    code: '<Button variant="primary">Primary button</Button>'
  },
  {
    title: 'Secondary button',
    description: 'Use secondary buttons for secondary actions that need more emphasis than ghost buttons.',
    variant: 'secondary',
    code: '<Button variant="secondary">Secondary button</Button>'
  },
  {
    title: 'Ghost button',
    description: 'Use ghost buttons for secondary actions or in places where a button needs to be less visually prominent.',
    variant: 'ghost',
    code: '<Button variant="ghost">Ghost button</Button>'
  }
];

export default function ButtonsDocumentation() {
  return (
    <DocsLayout
      title="Buttons"
      description="Buttons allow users to trigger actions with a single tap. They communicate calls to action to your users and allow them to interact with your interface."
    >
      <DocsSection title="Variants">
        {buttonVariants.map((variant) => (
          <DocsExample
            key={variant.variant}
            title={variant.title}
            description={variant.description}
            preview={<Button variant={variant.variant}>{variant.title}</Button>}
            code={variant.code}
          />
        ))}
      </DocsSection>
    </DocsLayout>
  );
} 