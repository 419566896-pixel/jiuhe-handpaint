import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('首页', () => {
  it('应该渲染主标题', () => {
    render(<Home />);
    const matches = screen.getAllByText(/久合手绘喷绘工艺/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('应该渲染电话号码', () => {
    render(<Home />);
    const matches = screen.getAllByText(/13168873754/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });

  it('应该渲染四大理由', () => {
    render(<Home />);
    expect(screen.getByText(/四大理由让全国商家都选我们/)).toBeInTheDocument();
  });

  it('应该渲染四步流程', () => {
    render(<Home />);
    expect(screen.getByText(/四步搞定/)).toBeInTheDocument();
  });

  it('应该渲染客户评价', () => {
    render(<Home />);
    expect(screen.getByText(/合作客户这样说/)).toBeInTheDocument();
  });

  it('应该渲染预约表单', () => {
    render(<Home />);
    const matches = screen.getAllByText(/预约打样/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
    const nameInputs = screen.getAllByPlaceholderText(/姓名或公司名/);
    expect(nameInputs.length).toBeGreaterThanOrEqual(1);
  });

  it('应该渲染 Footer 版权信息', () => {
    render(<Home />);
    expect(screen.getByText(/版权所有/)).toBeInTheDocument();
  });

  it('应该渲染 SEO 隐藏文案', () => {
    render(<Home />);
    const matches = screen.getAllByText(/久合手绘喷绘工艺厂位于广州/);
    expect(matches.length).toBeGreaterThanOrEqual(1);
  });
});
